import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  Default,
  ForeignKey,
  DataType
} from "sequelize-typescript";
import Whatsapp from "./Whatsapp";

@Table
class Baileys extends Model<Baileys> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Default(null)
  @Column({
    type: DataType.STRING,
  })
  contacts: string;

  @Default(null)
  @Column({
    type: DataType.STRING,
  })
  chats: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @ForeignKey(() => Whatsapp)
  @Column({
    type: DataType.INTEGER,
  })
  whatsappId: number;
}

export default Baileys;
