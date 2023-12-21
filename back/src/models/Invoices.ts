import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType
} from "sequelize-typescript";

@Table({ tableName: "Invoices" })
class Invoices extends Model<Invoices> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  detail: string;

  @Column({
    type: DataType.STRING,
  })
  status: string;

  @Column({
    type: DataType.NUMBER,
  })
  value: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column({
    type: DataType.STRING,
  })
  dueDate: string;

  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

}

export default Invoices;
