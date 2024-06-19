const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const BaoCao = require("./BaoCao");
const NhanVien = require("./NhanVien");

const KTV_BaoCao = sequelize.define(
  "KTV_BaoCao",
  {
    MaKTV: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    BaoCaoID: {
      type: DataTypes.INTEGER,
    },
    NamKy: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "KTV_BaoCao",
    timestamps: false,
  }
);

BaoCao.hasMany(KTV_BaoCao, { foreignKey: "BaoCaoID" });
NhanVien.hasMany(KTV_BaoCao, { foreignKey: "MaKTV" });
KTV_BaoCao.belongsTo(BaoCao, { foreignKey: "BaoCaoID" });
KTV_BaoCao.belongsTo(NhanVien, { foreignKey: "MaKTV" });

module.exports = KTV_BaoCao;
