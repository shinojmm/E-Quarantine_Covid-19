import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

// CLOUDANT CREDENTIALS
// Warning : Use Environment variable in production instead
const CLOUDANT_URL = "https://cors-anywhere.herokuapp.com/https://3bd361f5-cda9-41a7-8ffa-6f622c7891c0-bluemix.cloudantnosqldb.appdomain.cloud"
const CLOUDANT_USERNAME = "3bd361f5-cda9-41a7-8ffa-6f622c7891c0-bluemix"
const CLOUDANT_PASSWORD = "6bdf5c7d860c2704114a836f5d329dadf2394c02e72e5ae00bfafbe54017ff97"
const BASIC_AUTH = 'Basic ' + btoa(CLOUDANT_USERNAME + ':' + CLOUDANT_PASSWORD);

@Injectable({
  providedIn: 'root'
})

export class CloudantServiceService {


  constructor(private http: HttpClient){}
  
  // HTTP HEADERS
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': BASIC_AUTH,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    })
  };

  /**
   * Create a new database in the cloudant instance
   * @param db database name
   */
  createDB(db: string): Observable<{}> {
    const url = `${CLOUDANT_URL}/${db}`
    return this.http.put(url, '' , this.httpOptions)
  }

  /**
   * Create a new document in the cloudant db
   * @param db database name
   * @param docId document id
   * @param doc document to create
   */
  createDoc(db: string, doc: string): Observable<{}> {
    const url = `${CLOUDANT_URL}/${db}`;
    return this.http.post<{}>(url, doc, this.httpOptions)
  }

  createDocs(db: string, doc: string){
    try{
    const url = `${CLOUDANT_URL}/${db}`;
    this.http.post<{}>(url, doc, this.httpOptions);
    console.log('test');
    console.log(db);
    }
    catch (error) {
      console.error('Here is the error message', error);
     }
  }

  /**
   * Get a document docId from the cloudant db
   * @param db database name
   * @param docId document id
   */
  getDoc(db: string, docId: string): Observable<{}>  {
    const url = `${CLOUDANT_URL}/${db}/${docId}`;
    return this.http.get<{}>(url, this.httpOptions)

  }

  getAllDoc(db: string): Observable<{}>  {
    const url = `${CLOUDANT_URL}/${db}/${'_all_docs?include_docs=true'}`;
    return this.http.post<{}>(url, this.httpOptions)

  }

  /**
   * Update a document in the cloudant db. The updated doc must contain the id and the old document's revision
   * @param db database name
   * @param docId document id
   * @param doc document to update
   */
  updateDoc(db: string, docId: string, doc: string): Observable<{}> {
    const url = `${CLOUDANT_URL}/${db}/${docId}`;
    return this.http.post<{}>(url, doc, this.httpOptions)
  }

  /**
   * Delete a document in the cloudant db.
   * @param db  database name
   * @param docId document id
   */
  deleteDoc(db: string, docId: string): Observable<{}> {
    const url = `${CLOUDANT_URL}/${db}/${docId}`;
    return this.http.delete<{}>(url, this.httpOptions)
  }
}
