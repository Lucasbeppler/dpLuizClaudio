import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateEmployees1639175482134 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "employees",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "scholarId",
                        type: "uuid",
                    },
                    {
                        name: "roleId",
                        type: "uuid",
                    },
                    {
                        name: "departmentId",
                        type: "uuid",
                    },
                    {
                        name: "cost",
                        type: "varchar",
                    },
                    {
                        name: "phone",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )

        await queryRunner.createForeignKey("employees", new TableForeignKey({
            columnNames: ["scholarId"],
            referencedColumnNames: ["id"],
            referencedTableName: "scholars",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("employees", new TableForeignKey({
            columnNames: ["roleId"],
            referencedColumnNames: ["id"],
            referencedTableName: "roles",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("employees", new TableForeignKey({
            columnNames: ["departmentId"],
            referencedColumnNames: ["id"],
            referencedTableName: "departments",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("employees")
    }

}
