import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export default class Agendamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  nome!: string

  @Column()
  cpf!: string

  @Column()
  celular!: string

  @Column()
  cep!: string

  @Column()
  rua!: string

  @Column()
  cidade!: string

  @Column()
  title!: string

  @Column()
  numeroCasa!: string

  @Column({default: ''})
  polegadasTv!: string

  @Column({default: ''})
  modelo!: string

  @Column()
  marca!: string

  @Column()
  defeito!: string
}