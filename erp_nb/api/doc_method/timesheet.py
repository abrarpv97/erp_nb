import frappe

def on_submit_timesheet(self):
    self.update_task_and_project()