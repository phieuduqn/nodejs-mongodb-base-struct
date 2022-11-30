/* eslint-disable max-len */
import { Seeder } from "mongoose-data-seed";
import { SystemSetting } from "../models";

const data = [
  {
    settingId: "1",
    logo: "String",
    company: {
      name: "Influencer company",
      phone: "0988343222",
      email: "info@influencer.vn",
    },
    social: [
      {
        code: "facebook",
        icon: "icon",
        link: "https://facebook.com",
      },
      {
        code: "instagram",
        icon: "icon",
        link: "https://instagram.com",
      },
      {
        code: "google",
        icon: "icon",
        link: "https://google.com",
      },
    ],
    senderEmail: "phieulangqn@gmail.com",
    senderDomain: "https://support.influencer.vn",
  },
];

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["shouldRun", "run"] }] */

class SystemSeeder extends Seeder {
  async shouldRun() {
    return SystemSetting.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return SystemSetting.create(data);
  }
}

export default SystemSeeder;
