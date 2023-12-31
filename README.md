========================================
SBA 316 - DOM MANIPULATION
========================================

[SBA 316 - DOM - Screenshot.pdf](https://github.com/christianpsamson/011-SBA-DOM/files/13200476/SBA.316.-.DOM.-.Screenshot.pdf)

========================================
LIMITATION:
========================================

The developed web page is focused on the Contact Us form, in order to accomplish the absolute minimum requirement. Hence, the assumption is that the "Book Now" button is selected to show this page.

Moreover, the menu bar buttons are not linked to any html pages. These were created only to implement the requirement for itiration and element manipulation.

========================================
REQUIREMENTS INCLUDED:
========================================

- selectElementByID: used in event handler 'handlingContactForm'
- querySelector: used in creating the menu bar items using array
- parent-child sibling relationship: firstElementChild was used in the event handler 'handlingContactForm'
- iterate through elements: used in creating menu navigation bar
- createElement:
  (1) inline error handling in contact form; fields cannot be empty
  (2) creating the menu bar items through array
- appendChild: used in menu navigation bar creation
- textContent: used in inline error handling in contact form; the fields cannot be empty
- classList: used in inline error handling in contact form; style of error message is included in style.css --> .error
- attribute modification: styles in the contact form (color, background-color) changes depending on the user interaction ex: :hover, :focus: when clicked
- two event listeners:
  (1) Event handler used in contact form submission
  (2) Event handler used in menu > Partner Store to trigger window.open()
- two BOM properties:
  (1) window.open() and
  (2) window.screen are used in the menu bar > Partner Store.
  NOTE: Please navigate to menu > Partner Store to trigger window.open() property.
- HTML form validation: included in the contact.html; the email address cannot be @example.com
- event-based form validation: included in event handler 'handlingContactForm'; All fields must be filled out. Otherwise, inline error handling will activate
- program runs without error
