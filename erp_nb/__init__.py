from __future__ import unicode_literals
from erpnext.projects.doctype.timesheet.timesheet import Timesheet
from erp_nb.api.doc_method.timesheet import on_submit_timesheet

__version__ = '0.0.1'

Timesheet.on_submit = on_submit_timesheet