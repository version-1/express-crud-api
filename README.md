# express-crud


## how to run

run mysql container

```bash
$ docker run -d -v $PWD/data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password mysql-ja
// connect db
$ mysql -h 127.0.0.1 -u root -ppassword

myssql> create databse crudapi_development;
```


### db setup

```bash
export DATABASE_HOST=127.0.0.1
export DATABASE_NAME=crudapi
export DATABASE_PASSWORD=
export DATABASE_USERNAME=root
export JWT_SECRET_KEY=[secret]

yarn install
yarn db:setup
```

