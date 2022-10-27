import { Accordion } from "flowbite-react";
import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="mt-3">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What is CORS?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request. An example of a cross-origin request:
              the front-end JavaScript code served from https://domain-a.com
              uses XMLHttpRequest to make a request for
              https://domain-b.com/data.json. For security reasons, browsers
              restrict cross-origin HTTP requests initiated from scripts. For
              example, XMLHttpRequest and the Fetch API follow the same-origin
              policy. This means that a web application using those APIs can
              only request resources from the same origin the application was
              loaded from unless the response from other origins includes the
              right CORS headers.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            why we choose firebase for authentication although we have many
            other options?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more. When you upgrade to Firebase Authentication
              with Identity Platform, you unlock additional features, such as
              multi-factor authentication, blocking functions, user activity and
              audit logging, SAML and generic OpenID Connect support,
              multi-tenancy, and enterprise-level support.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Firebase Authentication integrates tightly with other Firebase
              services, and it leverages industry standards like OAuth 2.0 and
              OpenID Connect, so it can be easily integrated with your custom
              backend.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How does private route works?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Private Routes in React Router (also called Protected Routes)
              require a user being authorized to visit a route (read: page). So
              if a user is not authorized for a specific page, they cannot
              access it. The most common example is authentication in a React
              application where a user can only access the protected pages when
              they are authorized (which means in this case being
              authenticated).
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Authorization goes beyond authentication though. For example, a
              user can also have roles and permissions which give a user access
              to specific areas of the application. The react private route
              component renders child components ( children ) if the user is
              logged in. If not logged in the user is redirected to the /login
              page with the return url passed in the location state property
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is node? How it works</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. Non-blocking I/o:
              Non-blocking i/o means working with multiple requests without
              blocking the thread for a single request. I/O basically interacts
              with external systems such as files, databases. Node.js is not
              used for CPU-intensive work means for calculations, video
              processing because a single thread cannot handle the CPU works.
              Asynchronous: Asynchronous is executing a callback function. The
              moment we get the response from the other server or database it
              will execute a callback function. Callback functions are called as
              soon as some work is finished and this is because the node.js uses
              an event-driven architecture. The single thread doesn’t work with
              the request instead it sends the request to another system which
              resolves the request and it is accessible for another request. To
              implement the concept of the system to handle the request node.js
              uses the concept of Libuv. Libuv is an open-source library
              built-in C. It has a strong focus on asynchronous and I/O, this
              gives node access to the underlying computer operating system,
              file system, and networking.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Working of Node.js: Node.js accepts the request from the clients
              and sends the response, while working with the request node.js
              handles them with a single thread. To operate I/O operations or
              requests node.js use the concept of threads. Thread is a sequence
              of instructions that the server needs to perform. It runs parallel
              on the server to provide the information to multiple clients.
              Node.js is an event loop single-threaded language. It can handle
              concurrent requests with a single thread without blocking it for
              one request.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              it is highly scalable, lightweight, fast, and data-intensive.
              Node.js basically works on two concept Asynchronous Non-blocking
              I/O
              <br />
              Non-blocking I/o: Non-blocking i/o means working with multiple
              requests without blocking the thread for a single request. I/O
              basically interacts with external systems such as files,
              databases. Node.js is not used for CPU-intensive work means for
              calculations, video processing because a single thread cannot
              handle the CPU works. Asynchronous: Asynchronous is executing a
              callback function. The moment we get the response from the other
              server or database it will execute a callback function. Callback
              functions are called as soon as some work is finished and this is
              because the node.js uses an event-driven architecture. The single
              thread doesn’t work with the request instead it sends the request
              to another system which resolves the request and it is accessible
              for another request. To implement the concept of the system to
              handle the request node.js uses the concept of Libuv. Libuv is an
              open-source library built-in C. It has a strong focus on
              asynchronous and I/O, this gives node access to the underlying
              computer operating system, file system, and networking.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blog;
