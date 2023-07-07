import { MigrationInterface, QueryRunner } from "typeorm"

export class GenerateAndSeedCategories1688651718064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `insert into categories (name, parent_id) values ('Elevator', 47);
            insert into categories (name, parent_id) values ('Temp Fencing, Decorative Fencing and Gates', 28);
            insert into categories (name, parent_id) values ('Structural and Misc Steel (Fabrication)', 2);
            insert into categories (name, parent_id) values ('Casework', 22);
            insert into categories (name, parent_id) values ('Temp Fencing, Decorative Fencing and Gates', 24);
            insert into categories (name, parent_id) values ('Overhead Doors', 26);
            insert into categories (name, parent_id) values ('Overhead Doors', 25);
            insert into categories (name, parent_id) values ('Roofing (Metal)', 50);
            insert into categories (name, parent_id) values ('Retaining Wall and Brick Pavers', 27);
            insert into categories (name, parent_id) values ('Soft Flooring and Base', 34);
            insert into categories (name, parent_id) values ('Structural & Misc Steel Erection', 14);
            insert into categories (name, parent_id) values ('Sitework & Site Utilities', 4);
            insert into categories (name, parent_id) values ('Termite Control', NULL);
            insert into categories (name, parent_id) values ('Framing (Wood)', 3);
            insert into categories (name, parent_id) values ('Landscaping & Irrigation', 32);
            insert into categories (name, parent_id) values ('Construction Clean and Final Clean', 47);
            insert into categories (name, parent_id) values ('Fire Sprinkler System', 40);
            insert into categories (name, parent_id) values ('Soft Flooring and Base', 26);
            insert into categories (name, parent_id) values ('Masonry & Precast', 38);
            insert into categories (name, parent_id) values ('Drywall & Acoustical (FED)', 48);
            insert into categories (name, parent_id) values ('Doors, Frames & Hardware', 8);
            insert into categories (name, parent_id) values ('Masonry', 24);
            insert into categories (name, parent_id) values ('Doors, Frames & Hardware', 11);
            insert into categories (name, parent_id) values ('Drywall & Acoustical (MOB)', 1);
            insert into categories (name, parent_id) values ('Termite Control', 27);
            insert into categories (name, parent_id) values ('Doors, Frames & Hardware', 13);
            insert into categories (name, parent_id) values ('Construction Clean and Final Clean', 5);
            insert into categories (name, parent_id) values ('Prefabricated Aluminum Metal Canopies', NULL);
            insert into categories (name, parent_id) values ('Framing (Steel)', 12);
            insert into categories (name, parent_id) values ('Framing (Wood)', 1);
            insert into categories (name, parent_id) values ('EIFS', 41);
            insert into categories (name, parent_id) values ('Wall Protection', 11);
            insert into categories (name, parent_id) values ('Ornamental Railings', NULL);
            insert into categories (name, parent_id) values ('Fire Protection', 11);
            insert into categories (name, parent_id) values ('Rebar & Wire Mesh Install', 48);
            insert into categories (name, parent_id) values ('Elevator', 39);
            insert into categories (name, parent_id) values ('Masonry & Precast', 44);
            insert into categories (name, parent_id) values ('Framing (Steel)', 22);
            insert into categories (name, parent_id) values ('Roofing (Asphalt)', 27);
            insert into categories (name, parent_id) values ('Roofing (Asphalt)', 45);
            insert into categories (name, parent_id) values ('Exterior Signage', 42);
            insert into categories (name, parent_id) values ('Casework', 16);
            insert into categories (name, parent_id) values ('Asphalt Paving', 29);
            insert into categories (name, parent_id) values ('Asphalt Paving', 32);
            insert into categories (name, parent_id) values ('Overhead Doors', NULL);
            insert into categories (name, parent_id) values ('Structural & Misc Steel Erection', 17);
            insert into categories (name, parent_id) values ('Rebar & Wire Mesh Install', 47);
            insert into categories (name, parent_id) values ('Drilled Shafts', 10);
            insert into categories (name, parent_id) values ('Roofing (Metal)', 43);
            insert into categories (name, parent_id) values ('Exterior Signage', 13);`,
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE "categories"`,
        ) 
    }

}
