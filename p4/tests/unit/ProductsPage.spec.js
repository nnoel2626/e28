//tests /unit/ProductsPage.js

import { expect } from "chai";
import { mount, RouterLinkStub } from "@vue/test-utils";
import ProductsPage from "@/components/pages/ProductsPage.vue";

describe("ProductsPage.vue", () => {
  let product = {
    slug: "Carpenter-center-theater",
    building: "Carpenter Center",
    room: "Theater",
    make: "Shure",
    model: "ULX P4",
    mic_type: "HandHeld # 3",
    freq_range: "554-590 MHZ",
    freq_band: "J1",
    group: "G2",
    channel: "CH19",
    Assigned_freq: "588.800MHz",
    serial_number: "12345",
    comments: "ABCDEF",
    categories: ["installedMic", "portableMic"]
  };

  it("shows all the products", () => {
    const wrapper = mount(ProductsPage, {
      computed: {
        products: function() {
          return [product];
        }
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.text()).to.include("List of Wireless Microphones");
    expect(wrapper.text()).to.include(product.model);
    expect(wrapper.text()).to.include(product.building);
  });
});
