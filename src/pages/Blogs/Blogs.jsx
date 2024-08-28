import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
        <div className='lg:container mx-auto mt-12'>
            <Helmet>
                <title>Blogs - BrainyPlay</title>
            </Helmet>

            {/* Question 1 */}
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">What is an access token and refresh token? How do they work and where should we store them on the client-side?</div>
                <div className="collapse-content">
                    <p>     -when a user logs in, backend issues both access token and refresh token
                        <br /><br />
                        <strong>Access token: </strong> Any user with an access token is automatically authenticated. Generally an access token is valid for a few minutes or hours. But it can vary. Access token is generally saved in HTTP only cookies on client side.
                        <br /><br />
                        <strong>Refresh token: </strong> Refresh token allows user to log in and stay connected without typing password for a long period of time. It is generally saved in backend database. Refresh token is only used when the access token gets invalid or expires. Refresh token is generally stay valid for a few days or moths.
                    </p>
                </div>
            </div>

            {/* Question 2 */}
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Compare SQL and NoSQL databases</div>
                <div className="collapse-content">
                    <p>
                        -SQL databases are relational, and NoSQL databases are non-relational. <br />
                        -SQL databases use structured query language (SQL) and have a predefined schema. NoSQL          databases have dynamic schemas for unstructured data. <br />
                        -SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                        -SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                        -SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>
            </div>

            {/* Question 3 */}
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What is express js? What is Nest JS?</div>
                <div className="collapse-content">
                    <p>
                        <strong>Express.js: </strong>  Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
                        <br /><br />
                        Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks.
                        <br /><br />

                        <strong>NestJs: </strong> NestJS is a progressive Node.js framework for building server-side applications. It uses TypeScript by default, providing strong typing and modern JavaScript features, but it also supports pure JavaScript. NestJS is designed to help developers create highly testable, scalable, and maintainable applications.
                    </p>
                </div>
            </div>
            {/* Question 4 */}
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What is MongoDB aggregate and how does it work?</div>
                <div className="collapse-content">
                    <p>
                        Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                        <br /><br />
                        One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;