LESSONS:
Table:

- A table is the fundamnetal data structure to RTBs.
- Consider how Javascript has common data sctructures like arrays and objects.
  In JS, arrays and objects have rules that help you manipulate and organize data.
  For example, Arrays are organized by index, and always keep their order, this
  makes them great for lists. Objects, however are organized by key, so they are
  useful for organizing items with unique names that you want to access quickly by
  name.
- In RDBs, there is a data sctrucure called a table, and it has certain qualities
  that help you organize and access your data in the database!
- When vizualized, a table often looks like a Microsoft Excel Spreadsheet.
  Each row is called a 'record'. Each instance is not named. (records are like entries in an array in JS)
  Each column is called an 'attribute' or a 'field'. (like properties of an object in JS)
  The closest way to consider a table in JS would be to consider an Array of Objects
- The only exception to the analogy of "an array of objects" is that
  in JS arrays hold their order and are indexed accordingly. In RTBs, tables
  do no retain their order, they are simply an unordered group of commonly
  shaped data.
  The good news is that the lack of defined structure opens the door to
  flexibility. You have the ability to decide how the items are accessed
  by means of a 'Primary Key'.
  If you choose to use a 'Primary Key', it will be the way that you uniquely
  identify each record in the table. (This is a lot like keys in a JS object)
- If you choose to use a Primary Key, each record must have an attribute that
  is the datatype of the primary key, and each primary key must be unique. (Also
  like keys in a JS object)
