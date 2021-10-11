frappe.ui.form.on('Timesheet', {
    refresh: function(frm) { 
        if(frm.doc.docstatus == '0'){
             frm.remove_custom_button("Start Timer");
       
   }},
   onload:function(frm){
        if (!frm.doc.timesheet) {
            frm.set_intro('⚠️ <b>ATTENTION️ !</b>  You would not be able to modify this Timesheet once you Submit.');
        }
   },
   validate:function(frm,cdt,cdn){
        let sum = 0;
        $.each(frm.doc.time_logs || [], function(i, v) { 
            var time=v.time;
            var timeArray = time.split('.');
            var hours = parseInt(timeArray[0]);
            var minutes = parseInt(timeArray[1]);
            var total_mins = (hours * 60) + minutes;
            sum = sum + total_mins
        });
        
        let hours = Math.floor(sum / 60);
        let minutes = sum % 60;
        let total= hours + "." + (minutes <= 9 ? "0" : "") + minutes;
        frm.set_value("total_hours_working",total)

    }
});
frappe.ui.form.on('Timesheet Detail', {
    spend_time_mins: function(frm,cdt,cdn){
        let d = locals[cdt][cdn]
        let time = d.expected_hours + '.'+ d.spend_time_mins;
        frappe.model.set_value(d.doctype, d.name, "time",time);
    },
    spend_time_hours: function(frm,cdt,cdn){
        let d = locals[cdt][cdn]
        var time = d.spend_time_hours + '.' + d.spend_time_mins;
        frappe.model.set_value(d.doctype, d.name, "time", time);
        frappe.model.set_value(d.doctype, d.name, "expected_hours", d.spend_time_hours);
    }

});