import React from "react";
import Table from "react-bootstrap/Table";

const Blogs = () => {
  return (
    <div className="container my-5" style={{minHeight: "calc(100vh - 185px)"}}>
      <div className="py-4">
        {/* Question 1 */}
        <h2 className="mb-5">
          Q: What is the difference between JavaScript and Node Js?
        </h2>
        <span className="fw-bold">JavaScript</span>
        <p>
          Javascript is a Scripting language. It is mostly abbreviated as JS. It
          can be said that Javascript is the updated version of the ECMA script.
          Javascript is a high-level programming language that uses the concept
          of Oops but it is based on prototype inheritance.
        </p>
        <br />
        <span className="fw-bold">Node JS</span>
        <p>
          NodeJS is a cross-platform and opensource Javascript runtime
          environment that allows the javascript to be run on the server-side.
          Nodejs allows Javascript code to run outside the browser. Nodejs comes
          with a lot of modules and mostly used in web development.{" "}
        </p>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>JavaScript</th>
              <th>Node Js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Javascript is a programming language that is used for writing
                scripts on the website.{" "}
              </td>
              <td>NodeJS is a Javascript runtime environment.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Javascript can only be run in the browsers.</td>
              <td>
                We can run Javascript outside the browser with the help of
                NodeJS.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>It is basically used on the client-side.</td>
              <td>@It is mostly used on the server-side.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                Javascript is capable enough to add HTML and play with the DOM.{" "}
              </td>
              <td>Nodejs does not have capability to add HTML tags.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                Javascript can run in any browser engine as like JS core in
                safari and Spidermonkey in Firefox.{" "}
              </td>
              <td>
                V8 is the Javascript engine inside of node.js that parses and
                runs Javascript.{" "}
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Javascript is used in frontend development.</td>
              <td>Nodejs is used in server-side development.</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                Some of the javascript frameworks are RamdaJS, TypedJS, etc.{" "}
              </td>
              <td>
                Some of the Nodejs modules are Lodash, express etc. These
                modules are to be imported from npm.{" "}
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                It is the upgraded version of ECMA script that uses Chrome’s V8
                engine written in C++.{" "}
              </td>
              <td>Nodejs is written in C, C++ and Javascript.</td>
            </tr>
          </tbody>
        </Table>
      </div>
      {/* Question 2 */}
      <div className="py-4">
        <h2 className="mb-5">
          Q2: When should you use nodejs and when should you use mongodb?
        </h2>
        <span className="fw-bold">NodeJs can be used when:-</span>
        <ul>
          <li>
            Applications that are highly event driven & are heavily I/O bound.
          </li>
          <li>
            Applications handling a large number of connections to other
            systems.
          </li>
          <li>
            Real-time applications (Node.js was designed from the ground up for
            real time and to be easy to use.)
          </li>
          <li>
            Applications that juggle scads of information streaming to and from
            other sources.
          </li>
          <li>High traffic, Scalable applications.</li>
          <li>
            Mobile apps that have to talk to platform API & database, without
            having to do a lot of data analytics.
          </li>
          <li>Build out networked applications.</li>
          <li>Applications that need to talk to the back end very often.</li>
        </ul>
        <br />
        <span className="fw-bold">MongoDB can be used when:-</span>
        <p>
          NoSQL databases like MongoDB are a good choice when your data is
          document-centric and doesn’t fit well into the schema of a relational
          database, when you need to accommodate massive scale, when you are
          rapidly prototyping, and a few other use cases.
        </p>
        <ul>
          <li>
            MongoDB stores data records as BSON documents. BSON is a binary
            representation of JSON documents, though it contains more data types
            than JSON.
          </li>
          <li>
            NoSQL databases in general and MongoDB in particular are
            particularly well suited to certain use cases.
          </li>
          <li>When to work with Large Scale Data.</li>
          <li>When to work on multiple servers</li>
        </ul>
      </div>
      <div className="py-4">
        <h2 className="mb-5">
          Q3: What is the differences between SQL and NoQL databases?
        </h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>SQL</th>
              <th>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</td>
              <td>Non-relational or distributed database system.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                These databases have fixed or static or predefined schema.
              </td>
              <td>They have dynamic schema.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                These databases are not suited for hierarchical data storage.
              </td>
              <td>
                These databases are best suited for hierarchical data storage.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>These databases are best suited for complex queries.</td>
              <td>These databases are not so good for complex queries</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Vertically Scalable.</td>
              <td>Horizontally scalable.</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Follows ACID property.</td>
              <td>
                Follows CAP(consistency, availability, partition tolerance).
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="py-4">
        <h2 className="mb-5">
          Q4: What is the purpose of jwt and how does it work?
        </h2>
        <span className="fw-bold">Purpose of jwt</span>
        <p>
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
        <br />
        <span className="fw-bold">How jwt works</span>
        <p>
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted.
          <br /><br />
          A JWT is a string made up of three parts, separated by dots (.), and
          serialized using base64. In the most common serialization format,
          compact serialization, the JWT looks something like this:
          xxxxx.yyyyy.zzzzz.
          <br /><br />
          Once decoded, you will get two JSON strings:
          <br /><br />
          The header and the payload. The signature. The JOSE (JSON Object
          Signing and Encryption) header contains the type of token — JWT in
          this case — and the signing algorithm.
          <br /><br />
          The payload contains the claims. This is displayed as a JSON string,
          usually containing no more than a dozen fields to keep the JWT
          compact. This information is typically used by the server to verify
          that the user has permission to perform the action they are
          requesting.
          <br /><br />
          There are no mandatory claims for a JWT, but overlaying standards may
          make claims mandatory. For example, when using JWT as bearer access
          token under OAuth2.0, iss, sub, aud, and exp must be present. some are
          more common than others.
          <br /><br />
          The signature ensures that the token hasn’t been altered. The party
          that creates the JWT signs the header and payload with a secret that
          is known to both the issuer and receiver, or with a private key known
          only to the sender. When the token is used, the receiving party
          verifies that the header and payload match the signature.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
