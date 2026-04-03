const mongoose = require('mongoose');

const productLayoutObject = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  basePrice: {
    type: Number,
    required: true,
    min: [0, "Hold up, we can't be paying people to take our stuff."]
  },
  category: {
    type: String,
    required: true,
    index: true // Searching by category is super common, so let's make it quick.
  },
  subCategory: {
    type: String,
    index: true
  },
  brandHighlights: [String], // "Organic Cotton", "Handmade", "Limited Edition"
  isFeatured: {
    type: Boolean,
    default: false,
    index: true
  },
  active: {
    type: Boolean,
    default: true,
    index: true
  },
  // Rather than making an entire separate collection for variants, let's just shove them in here.
  // We're mostly reading this stuff for the storefront anyway, so this approach just makes sense.
  variants: [{
    sku: String,
    size: String,
    colorName: String,
    inventoryCount: {
      type: Number,
      default: 0
    },
    priceModifier: {
      type: Number,
      default: 0 // If XXL costs 5 bucks more, stick it here.
    }
  }],
  images: [{
    url: String,
    altText: String,
    isPrimaryCover: Boolean
  }]
}, {
  timestamps: true
});

// The magical compound index for the storefront grid.
// This is exactly what the "hottest read" path looks for.
productLayoutObject.index({ category: 1, active: 1, basePrice: 1 });

const ProductModel = mongoose.model('Product', productLayoutObject);

module.exports = ProductModel;
