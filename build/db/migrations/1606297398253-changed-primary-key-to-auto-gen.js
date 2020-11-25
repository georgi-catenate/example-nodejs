"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changedPrimaryKeyToAutoGen1606297398253 = void 0;
class changedPrimaryKeyToAutoGen1606297398253 {
    constructor() {
        this.name = 'changedPrimaryKeyToAutoGen1606297398253';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "id"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
            yield queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAt"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updatedAt"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updatedAt"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAt"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2020-11-24 17:56:39.124765+02'`);
            yield queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "id"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "id" SERIAL NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")`);
        });
    }
}
exports.changedPrimaryKeyToAutoGen1606297398253 = changedPrimaryKeyToAutoGen1606297398253;
//# sourceMappingURL=1606297398253-changed-primary-key-to-auto-gen.js.map