import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IContacts } from './contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  
  id: number = 1;
  fname: string;
  lname: string;
  email: string;
  phone: number;
  status: string;
  selectedStatus: string;

  isEdit: boolean = false;
  contactDetailForm: string = 'none';

  contactDetails: IContacts[] = [
    {
      'contactId': 1,
      'firstName': 'Madhuri',
      'lastName': 'Shinde',
      'emailId': 'ma@gmail.com',
      'phoneNumber': 12345,
      'status': 'Active'
    },
    {
      'contactId': 2,
      'firstName': 'Sam',
      'lastName': 'Jog',
      'emailId': 'samjog@gmail.com',
      'phoneNumber': 12345,
      'status': 'Inactive'
    },
    {
      'contactId': 3,
      'firstName': 'John',
      'lastName': 'Pete',
      'emailId': 'john1@gmail.com',
      'phoneNumber': 12345,
      'status': 'Active'
    },
  ];

  statusList = [
    {
      'mode': 'Active'
    },
    {
      'mode': 'Inactive'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  
  }

  onEditModal(contacts){
    this.contactDetailForm = 'block';
    this.isEdit = true;
    this.id = contacts.contactId;
    this.fname = contacts.firstName;
    this.lname = contacts.lastName;
    this.email = contacts.emailId;
    this.phone = contacts.phoneNumber;
    this.selectedStatus = contacts.status;
  }

  addContact(contact){
      this.contactDetailForm = 'none';
      this.contactDetails.push({
        contactId: ++this.id,
        firstName: contact.value.fname,
        lastName: contact.value.lname,
        emailId: contact.value.email,
        phoneNumber: contact.value.phone,
        status: contact.value.status
      });
      console.log(this.contactDetails);
  }

  deleteContact(id) {
    this.contactDetails.forEach((contact,index) => {
      if (contact.contactId === id) {
        this.contactDetails.splice(index, 1);
      }
    });
  }

  editContact(contactDetails, id) {
    this.contactDetailForm = 'none';
    this.isEdit = false;
    this.contactDetails.forEach((contact) => {
      if (contact.contactId === id) {
        contact.contactId = id;
        contact.firstName = contactDetails.value.fname;
        contact.lastName = contactDetails.value.lname;
        contact.emailId = contactDetails.value.email;
        contact.phoneNumber = contactDetails.value.phone;
        contact.status = contactDetails.value.status;
      }
    });
  }

}
