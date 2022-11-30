import { SystemSetting } from "../../models";

async function show() {
  return SystemSetting.findOne({ settingId: "1" });
}

async function update(data) {
  return SystemSetting.findOneAndUpdate({ settingId: "1" }, data, {
    new: true,
  });
}

export default {
  show,
  update,
};
