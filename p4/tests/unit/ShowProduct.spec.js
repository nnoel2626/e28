import { expect } from "chai";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import ShowProduct from "@/components/ShowProduct.vue";

describe("ShowProduct.vue", () => {
  it("show a product", () => {
    // Define a product we can test
    let product = {
      slug: "barker-center-thompson6",
      categories: ["portableMic"],
      building: "Barker Center",
      room: "Thompson",
      make: "Shure",
      model: "Axient Digital",
      mic_type: "HandHeld",
      freq_range: "470- 616 MHZ",
      freq_band: "G57",
      group: "G5",
      channel: "CH249",
      Assigned_freq: "605.875 MHz",
      serial_number: "",
      comments: ""
    };

    const wrapper = shallowMount(ShowProduct, {
      propsData: {
        product
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    // Assert our results
    expect(wrapper.text()).to.include(product.model);
    let foundProductLink = wrapper.find('[data-test="product-link"]').exists();
    expect(foundProductLink).to.equal(true);
  });
});
