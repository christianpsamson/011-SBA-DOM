==========================================
SBA 316 - DOM MANIPULATION
==========================================

==========================================
LIMITATION:
==========================================

The developed web page is focused on the Contact Us form, in order to accomplish the absolute minimum requirement. Hence, the assumption is that the "Book Now" button is selected to show this page.

Moreover, the menu bar buttons are not linked to any html pages. These were created only to implement the requirement for attiration and element manipulation.

==========================================
REQUIREMENTS INCLUDED:
==========================================

- selectElementByID: event handler 'handlingContactForm'
- querySelector: creating the menu bar items using array
- parent-child sibling relationship:
- iterate through elements: menu navigation bar
- createElement: inline error handling in contact form; fields cannot be empty
- appendChild: menu navigation bar
- textContent: inline error handling in contact form; fields cannot be empty
- classList: inline error handling in contact form; style of error message is in style.css, .error
- attribute modification: styles in the contact form (color, background-color) changes depending on the user interaction ex: :hover, :focus: when clicked
- two event listeners: 
    (1) Event handler used in contact form submission
    (2) Event handler used in menu > Partner Store to trigger window.open() 
- two BOM properties: window.open() and window.screen are used in the menu bar > Partner Store. NOTE: Please navigate to menu > Partner Store to trigger window.open() property.
- HTML form validation: included in the contact.html; email address cannot be @example.com
- event-based form validation: included in event handler 'handlingContactForm'; All fields must be filled out. Otherwise, inline error handling will activate
- program runs without error
