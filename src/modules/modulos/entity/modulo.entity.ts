import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ModuloEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  modulo: string;
}
