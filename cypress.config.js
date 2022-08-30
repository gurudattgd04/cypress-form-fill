const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        // @ts-ignore
        getFakerData(fakerName) {
          if (fakerName.includes("faker")) {
            const newValue = fakerName.split(":")[1];
            const fakerValue = faker.fake(`{{${newValue}}}`);
            if (newValue.includes("date")) {
              const date = new Date(fakerValue);
              return `${date.getDate()}/${(date.getMonth() + 1)
                .toString()
                // @ts-ignore
                .padStart(2, 0)}/${date.getFullYear()}`;
            }
            return fakerValue;
          }
          // @ts-ignore
          return fakerName;
        },
      });
    },
  },
});
