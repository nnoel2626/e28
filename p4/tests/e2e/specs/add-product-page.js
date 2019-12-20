describe("add-product-page", () => {
  // Test product
  let product = {
    name: "My New Product",
    // Append a Unix timestamp to the end of the slug, ensuring it's a unique value
    slug: "Carpenter-center-theater-15" + Date.now(),
    building: "Carpenter Center",
    room: "Theater",
    make: "Shure",
    model: "ULX P4",
    mic_type: "HandHeld # 3",
    freq_range: "554-590MHZ",
    freq_band: "J1",
    group: "G2",
    channel: "CH19",
    assigned_freq: "588.800 MHz",
    serial_number: "123456",
    comments: "ABCDFG",
    categories: "installedMic"
  };

  it("adds a new product", () => {
    cy.visit("/product/create");
    cy.get("[data-test=product-slug-input]").type(product.slug);
    cy.get("[data-test=product-building-input]").type(product.building);
    cy.get("[data-test=product-room-input]").type(product.room);
    cy.get("[data-test=product-make-input]").type(product.make);
    cy.get("[data-test=product-model-input]").type(product.model);
    cy.get("[data-test=product-mic_type-input]").type(product.mic_type);
    // cy.get("[data-test=product-freq_range-input]").type(product.freq_range);
    // cy.get("[data-test=product-freq_band-input]").type(product.freq_band);
    // cy.get("[data-test=product-group-input]").type(product.group);
    cy.get("[data-test=product-channel-input]").type(product.channel);
    cy.get("[data-test=product-assigned_freq-input]").type(
      product.assigned_freq
    );
    cy.get("[data-test=product-serial_number-input]").type(
      product.serial_number
    );
    cy.get("[data-test=product-comments-input]").type(product.comments);
    cy.get("[data-test=product-group-input]").type(product.categories);
    cy.get("[data-test=add-product-button]").click();
    cy.contains('[data-test="product-model"]', product.model);
    cy.url().should("include", product.slug);
  });
});
