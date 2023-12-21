import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  BelongsTo,
  ForeignKey
} from "sequelize-typescript";
import Company from "./Company";

@Table
class Announcement extends Model<Announcement> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.STRING,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  priority: number; //1 - alta, 2 - média, 3 - baixa

  @Column({
    type: DataType.STRING,
  })
  title: string;

  @Column({
    type: DataType.STRING,
  })
  text: string;

  @Column({
    type: DataType.STRING,
  })
  mediaPath: string;

  @Column({
    type: DataType.STRING,
  })
  mediaName: string;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.STRING,
  })
  companyId: number;

  @Column({
    type: DataType.STRING,
  })
  status: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => Company)
  company: Company;
}

export default Announcement;
