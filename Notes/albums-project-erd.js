/* 

* ERD for the "albums" project

USER |<-------------------------------------0< ALBUM

_id (ObjectId)                              _id (ObjectId)
username (String)                           albumTitle (String)
password (String)                           band (String)
firstName (String)                          albumYear (Number)
lastName (String)                           
emailAddress (String)
albums (Array of ObjectIds)


*/

// "PIN number"    X
// "ATM machine"   X
// "ERD diagram"   X

// "Personal Identification Number"   Correct
// Automatic Teller Machine           Correct

// "ER Diagram"                       Correct

/* 

? It may be helpful to remember that, as well the differences between SQL and NoSQL (e.g. MongoDB databases)...
? ... there are also some similarities:

A MongoDB collection is equivalent to a SQL table
A MongoDB document is equivalent to a SQL row (or record) 
MongoDB lets you define schemas, which let you create a document according to certain rules...
... just like the way SQL table work with records!

* Before we were working with embedded documents...
... there was only one entity - a User...
... each album was stored in the user's "albums" array as an embedded document

*/