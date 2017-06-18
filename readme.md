# Node Ecommerce POC

A proof of concept Ecommerce site written in Node.js running on Docker

### Installation

This application collection is best served with [Docker](https://www.docker.com/)

```bash
docker build -t node-ecommerce-poc-account ./account-api
docker run -d -p 3001:3000 --name=node-ecommerce-poc-account-api node-ecommerce-poc-account-api

docker build -t node-ecommerce-poc-product ./product-api
docker run -d -p 3002:3000 --name=node-ecommerce-poc-product-api node-ecommerce-poc-product-api

docker build -t node-ecommerce-poc-order-api ./order-api
docker run -d -p 3003:3000 --name=node-ecommerce-poc-order-api node-ecommerce-poc-order-api

docker build -t node-ecommerce-poc-admin ./admin
docker run -d -p 3005:3000 --name=node-ecommerce-poc-admin node-ecommerce-poc-admin

docker build -t node-ecommerce-poc-storefront ./storefront
docker run -d -p 3005:3000 --name=node-ecommerce-poc-storefront node-ecommerce-poc-storefront
```

What about [Docker Compose](https://docs.docker.com/compose/)?

```bash
docker-compose up --build
```

### Open Source Projects
Project | License
--- | ---
[Docker](https://github.com/docker/docker) | [Apache-2.0](https://github.com/docker/docker/blob/master/LICENSE)
[Node]() | [BSD-3-Clause]()


## Data Models

The following data models are in design, multiple databases to be utilized for best fit.

### User Model (MongoDB)

```json
{
	"userId": "generatedid",
	"email",
	"password": "salted",
	"firstname",
	"lastname",
	"settings" : {},
	"addresses": [
		{
			"type": "Residential or Business",
			"companyName",
			"address1",
			"address2",
			"city",
			"state",
			"zip",
			"country",
			"phone"
			"phoneExt"
		}
	],
	"createdate" : "2016-08-01 15:03:40",
    "lastlogin": "2016-08-01 17:03:40",
	"enabled": true,
	"sec-questions" : [
             { "question1" : "Security question 1 goes here", "answer" : "Answer to security question 1 goes here, probably salted" },
             { "question2" : "Security question 2 goes here", "answer" : "Answer to security question 2 goes here, probably salted" },
             { "question3" : "Security question 3 goes here", "answer" : "Answer to security question 3 goes here, probably salted" }
    ],
    "sec-roles" : ["admin", "user", "shop-manager", "salesman"]
}
```

### Session Model (Redis)

```json
{
	userId: "",
	sessionId: "",
	createdate: "",
	expiredate: ""
}
```

### Cateogry Model (Document Store such as MongoDB/Couchbase or ColumnStore such as Cassandra)

```json
 {
   title: "Mobiles containing a FM radio",
   parent: "mobile",
   path: "mobile/fm"
 }
 ```

### Product Model (MongoDB)

```json
{
  sku: "111445GB3",
  title: "Simsong One mobile phone",
  description: "The greatest Onedroid phone on the market .....",

  manufacture_details: {
    model_number: "A123X",
    release_date: new ISODate("2012-05-17T08:14:15.656Z")
  },

  shipping_details: {
    weight: 350,
    width: 10,
    height: 10,
    depth: 1
  },

  quantity: 99,

  pricing: {
    price: 1000
  }
}
```

### Cart Model (Redis)

```json
{
   sessionId: "the_users_session_id",
   products: [
    {
      sku: "111445GB3",
      quantity: 1
    }
   ]
 }

 ```
 ```
	Redis Model example
	set carts_james ( 1 3 )
	set carts_chris ( 2 )
	hash cart_1 {
		user : "james"
		product_28 : 1
		product_372: 2
	}
	hash cart_2 {
		user : "chris"
		product_15 : 1
		product_160: 5
		product_201: 7
	}
	HINCRBY cart_1 product_28 2
 ```

 ### Order Model (Postgres)

 ```json
 {
   created_on: new ISODate("2012-05-17T08:14:15.656Z"),

   shipping: {
     customer: "Peter P Peterson",
     address: "Longroad 1343",
     city: "Peterburg",
     region: "",
     state: "PE",
     country: "Peteonia",
     delivery_notes: "Leave at the gate",

     tracking: {
       company: "ups",
       tracking_number: "22122X211SD",
       status: "ontruck",
       estimated_delivery: new ISODate("2012-05-17T08:14:15.656Z")
     },
   },

   payment: {
     method: "visa",
     transaction_id: "2312213312XXXTD"
   }

   products: {
     {
        quantity: 2,
        sku:"111445GB3",
        title: "Simsong mobile phone",
        unit_cost:1000,
        currency:"USDA"
      }
   }
 }
 ```