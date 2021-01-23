# Educcate_Backend




## Sequelize 

- Model oluşturma 
`
sequelize model:create --name User --attributes name:string,surname:string,roleId:string

`

sequelize model:create --name User --attributes name:string,surname:string,password:string,email:string,currency_level:string,basket:string,credit:double,roleId:string,isRemoved:integer

- Demo user oluşturma : 
`sequelize db:seed:generate --name demo-user`

sequelize model:create --name User --attributes name:string,surname:string,email:string,password:string,rate_level:string,roleId:integer,isRemoved:integer
sequelize model:create --name Rate --attributes name:string,rate_hour:string,teacher_name:string,limit:integer,price:integer
sequelize model:create --name UserRate --attributes user_id:integer,rate_id:integer






(https://docs.microsoft.com/tr-tr/azure/postgresql/connect-nodejs)

jwt express rest api güvenliği (http://medium.com/@tugrulbayrak/jwt-json-web-tokens-ile-express-rest-api-g%C3%BCvenli%C4%9Fi-2-517cc44e846c)

sequelize nedir (https://mdpgroup.com/blog/sequelize-nedir/)



