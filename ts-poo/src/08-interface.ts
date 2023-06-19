export interface Driver {
  database: string
  password: string
  port: number
  connect(): void
  disconnect(): void
}

export class MySqlDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) { }

  connect(): void {
    console.log('Conecting to MySql database')
    // code ..
  }

  disconnect(): void {
    console.log('Disconecting from MySql database')
    // code ..
  }
}

export class PostgreSqlDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    protected host: string
  ) { }

  connect(): void {
    console.log('Conecting to PostgreSql database')
    // code ..
  }

  disconnect(): void {
    console.log('Disconecting from PostgreSql database')
    // code ..
  }
}

(() => {
  const mysql = new MySqlDriver('mydb', 'root', 1426)
  mysql.connect()

  const possql = new PostgreSqlDriver('mydb', 'root', 1426, 'localhost')
  possql.connect()
})()
