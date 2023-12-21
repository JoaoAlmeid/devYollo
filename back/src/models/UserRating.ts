import {
    Table,
    Column,
    CreatedAt,
    UpdatedAt,
    Model,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
    AutoIncrement,
    DataType
  } from "sequelize-typescript";

  import Company from "./Company";
  import User from "./User";
  import Ticket from "./Ticket";
  
  @Table({
    tableName: "UserRatings"
  })
  class UserRating extends Model<UserRating> {
    @PrimaryKey
    @AutoIncrement
    @Column({
    type: DataType.INTEGER,
  })
    id: number;

    @ForeignKey(() => Ticket)
    @Column({
    type: DataType.INTEGER,
  })
    ticketId: number;
  
    @BelongsTo(() => Ticket)
    ticket: Ticket;
  
    @ForeignKey(() => Company)
    @Column({
    type: DataType.INTEGER,
  })
    companyId: number;
  
    @BelongsTo(() => Company)
    company: Company;

    @ForeignKey(() => User)
    @Column({
    type: DataType.INTEGER,
  })
    userId: number;
  
    @BelongsTo(() => User)
    user: User;
  
    @Column({
    type: DataType.NUMBER,
  })
    rate: number;
  
    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  }
  
  export default UserRating;
  