import { EmptyState, Layout, LegacyCard, Page } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import React, { useState } from "react";

function Index() {
  const [open, setOpen] = useState(false);

  const handleSelection = (resources) => {
    setOpen(false);
    console.log(resources);
  };

  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: "Select products",
          onAction: () => setOpen(true),
        }}
      />
      <ResourcePicker
        resourceType="Product"
        showVariants={true}
        open={open}
        selectMultiple={false}
        onCancel={() => setOpen(false)}
        onSelection={(resources) => handleSelection(resources)}
      />
      <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{ content: "Select products", onAction: () => setOpen(true) }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Select products to change their price temporarily.</p>
        </EmptyState>
      </Layout>
    </Page>
  );
}

export default Index;
