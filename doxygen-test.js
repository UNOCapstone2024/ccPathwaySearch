/** DataSource is the basic object to handle input data of various sources.
*/
function DataSource()   // constructor (use  @ctor to add real docmentation)
{ }

 
/** advance to next record and retrieve content. Returns false, if pointer is located behind the last record.
The next() function provides a efficient looping construct:
@code
// ds: a data source
while (ds.next()) {
   // do something
}
@endcode
@treturn bool Returns false, if pointer is located behind the last record. */
function next() {}
DataSource.prototype.next = next;

/**
opens a datasource with a given \p type from a specific source \p name.
Opens a data source. Writes a output message if opening the data source failed.
@tparam string type Type of the datasource.
@tparam string name path to the file (for file based data sources) or the SQL query for database types.
\sa isOpen() */
function open(type, name) {}
DataSource.prototype.open = open;