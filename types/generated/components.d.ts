import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsCapabilityCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_capability_cards';
  info: {
    description: 'Manufacturing capability or engineering competency';
    displayName: 'Capability Card';
    icon: 'cog';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    number: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsContactDetail extends Struct.ComponentSchema {
  collectionName: 'components_elements_contact_details';
  info: {
    description: 'Corporate telephone, email, or facility coordinates';
    displayName: 'Contact Detail';
    icon: 'phone';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsCta extends Struct.ComponentSchema {
  collectionName: 'components_elements_ctas';
  info: {
    description: 'Call to action button or link';
    displayName: 'Call To Action';
    icon: 'cursor';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'outline']> &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface ElementsFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_columns';
  info: {
    description: 'Categorized footer link list';
    displayName: 'Footer Column';
    icon: 'bulletList';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.nav-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_elements_hero_slides';
  info: {
    description: 'Rotating homepage banner slide';
    displayName: 'Hero Slide';
    icon: 'picture';
  };
  attributes: {
    badgeSubtitle: Schema.Attribute.String;
    badgeTitle: Schema.Attribute.String;
    badgeUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    desktopImage: Schema.Attribute.Media<'images'>;
    eyebrow: Schema.Attribute.String;
    index: Schema.Attribute.String;
    primaryCta: Schema.Attribute.Component<'elements.cta', false>;
    secondaryCta: Schema.Attribute.Component<'elements.cta', false>;
    titleHighlight: Schema.Attribute.String;
    titleLine1: Schema.Attribute.String & Schema.Attribute.Required;
    titleLine2: Schema.Attribute.String;
  };
}

export interface ElementsNavItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_nav_items';
  info: {
    description: 'Navigation menu link';
    displayName: 'Navigation Item';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer;
  };
}

export interface ElementsProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_elements_process_steps';
  info: {
    description: 'Turnkey engineering lifecycle phase or operational step';
    displayName: 'Process Step';
    icon: 'arrowRight';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    stepNumber: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsProductVariant extends Struct.ComponentSchema {
  collectionName: 'components_elements_product_variants';
  info: {
    description: 'Machine spout configuration or operational model variant';
    displayName: 'Product Variant';
    icon: 'layer';
  };
  attributes: {
    capacityBph: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    spoutCount: Schema.Attribute.Integer;
    valveSizes: Schema.Attribute.String;
    variantName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    description: 'Official corporate social profile link';
    displayName: 'Social Link';
    icon: 'share';
  };
  attributes: {
    label: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      ['linkedin', 'youtube', 'instagram', 'facebook', 'twitter']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsSpecRow extends Struct.ComponentSchema {
  collectionName: 'components_elements_spec_rows';
  info: {
    description: 'Technical engineering parameter and value';
    displayName: 'Specification Row';
    icon: 'bulletList';
  };
  attributes: {
    notes: Schema.Attribute.String;
    parameter: Schema.Attribute.String & Schema.Attribute.Required;
    standard: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_stat_items';
  info: {
    description: 'Numeric telemetry or achievement metric';
    displayName: 'Stat Item';
    icon: 'chartBubble';
  };
  attributes: {
    labelLine1: Schema.Attribute.String & Schema.Attribute.Required;
    labelLine2: Schema.Attribute.String;
    numericTarget: Schema.Attribute.Integer;
    staticValue: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Search engine optimization and social sharing metadata';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    ogImage: Schema.Attribute.Media<'images'>;
    preventIndexing: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'elements.capability-card': ElementsCapabilityCard;
      'elements.contact-detail': ElementsContactDetail;
      'elements.cta': ElementsCta;
      'elements.footer-column': ElementsFooterColumn;
      'elements.hero-slide': ElementsHeroSlide;
      'elements.nav-item': ElementsNavItem;
      'elements.process-step': ElementsProcessStep;
      'elements.product-variant': ElementsProductVariant;
      'elements.social-link': ElementsSocialLink;
      'elements.spec-row': ElementsSpecRow;
      'elements.stat-item': ElementsStatItem;
      'shared.seo': SharedSeo;
    }
  }
}
