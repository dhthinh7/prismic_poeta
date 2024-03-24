// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomePageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Home Page documents
 */
interface HomePageDocumentData {
  /**
   * Title field in *Home Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Meta Description field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Slice Zone field in *Home Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice>;
}

/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomePageDocumentData>,
    "home_page",
    Lang
  >;

/**
 * Item in *Layout → Logo*
 */
export interface LayoutDocumentDataLogoItem {
  /**
   * Logo Icon field in *Layout → Logo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.logo[].logo_icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_icon: prismic.ImageField<never>;

  /**
   * Logo icon link field in *Layout → Logo*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.logo[].logo_icon_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logo_icon_link: prismic.LinkField;
}

type LayoutDocumentDataSlicesSlice = MenuItemSlice;

/**
 * Content for Layout documents
 */
interface LayoutDocumentData {
  /**
   * Logo field in *Layout*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.logo[]
   * - **Tab**: header
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  logo: prismic.GroupField<Simplify<LayoutDocumentDataLogoItem>>;

  /**
   * Slice Zone field in *Layout*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.slices[]
   * - **Tab**: header
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LayoutDocumentDataSlicesSlice>;
}

/**
 * Layout document from Prismic
 *
 * - **API ID**: `layout`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LayoutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<LayoutDocumentData>,
    "layout",
    Lang
  >;

interface PageDocumentData {}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type SubMenuDocumentDataSlicesSlice = SubMenuItemSlice | HeadingSlice;

type SubMenuDocumentDataSlices1Slice = HeadingSlice | SubMenuItemSlice;

type SubMenuDocumentDataSlices2Slice = HeadingSlice | SubMenuItemSlice;

type SubMenuDocumentDataSlices3Slice = HeadingSlice | SubMenuItemSlice;

/**
 * Content for Sub menu documents
 */
interface SubMenuDocumentData {
  /**
   * Slice Zone field in *Sub menu*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu.slices[]
   * - **Tab**: Column 1
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SubMenuDocumentDataSlicesSlice> /**
   * Slice Zone field in *Sub menu*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu.slices1[]
   * - **Tab**: Column 2
   * - **Documentation**: https://prismic.io/docs/field#slices
   */;
  slices1: prismic.SliceZone<SubMenuDocumentDataSlices1Slice> /**
   * Slice Zone field in *Sub menu*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu.slices2[]
   * - **Tab**: Column 3
   * - **Documentation**: https://prismic.io/docs/field#slices
   */;
  slices2: prismic.SliceZone<SubMenuDocumentDataSlices2Slice> /**
   * Slice Zone field in *Sub menu*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu.slices3[]
   * - **Tab**: Column 4
   * - **Documentation**: https://prismic.io/docs/field#slices
   */;
  slices3: prismic.SliceZone<SubMenuDocumentDataSlices3Slice>;
}

/**
 * Sub menu document from Prismic
 *
 * - **API ID**: `sub_menu`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SubMenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SubMenuDocumentData>,
    "sub_menu",
    Lang
  >;

export type AllDocumentTypes =
  | HomePageDocument
  | LayoutDocument
  | PageDocument
  | SubMenuDocument;

/**
 * Primary content in *Heading → Primary*
 */
export interface HeadingSliceDefaultPrimary {
  /**
   * Label field in *Heading → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Default variation for Heading Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeadingSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Heading*
 */
type HeadingSliceVariation = HeadingSliceDefault;

/**
 * Heading Shared Slice
 *
 * - **API ID**: `heading`
 * - **Description**: Heading
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingSlice = prismic.SharedSlice<
  "heading",
  HeadingSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Primary Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.primary_button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  primary_button_link: prismic.LinkField;

  /**
   * Secondary Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.secondary_button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  secondary_button_link: prismic.LinkField;

  /**
   * Background Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Primary Button Label field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.primary_button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  primary_button_label: prismic.KeyTextField;

  /**
   * Secondary Button Label field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.secondary_button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  secondary_button_label: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *LogoCarousel → Primary*
 */
export interface LogoCarouselSliceDefaultPrimary {
  /**
   * test field in *LogoCarousel → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: logo_carousel.primary.test
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  test: prismic.ContentRelationshipField;
}

/**
 * Primary content in *LogoCarousel → Items*
 */
export interface LogoCarouselSliceDefaultItem {
  /**
   * Logo field in *LogoCarousel → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: logo_carousel.items[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Default variation for LogoCarousel Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LogoCarouselSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LogoCarouselSliceDefaultPrimary>,
  Simplify<LogoCarouselSliceDefaultItem>
>;

/**
 * Slice variation for *LogoCarousel*
 */
type LogoCarouselSliceVariation = LogoCarouselSliceDefault;

/**
 * LogoCarousel Shared Slice
 *
 * - **API ID**: `logo_carousel`
 * - **Description**: LogoCarousel
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LogoCarouselSlice = prismic.SharedSlice<
  "logo_carousel",
  LogoCarouselSliceVariation
>;

/**
 * Primary content in *MenuItem → Primary*
 */
export interface MenuItemSliceDefaultPrimary {
  /**
   * Label field in *MenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *MenuItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for MenuItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MenuItemSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *MenuItem → Primary*
 */
export interface MenuItemSliceWithSubMenuPrimary {
  /**
   * Label field in *MenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Sub menu field in *MenuItem → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.sub_menu
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  sub_menu: prismic.ContentRelationshipField<"sub_menu">;
}

/**
 * With sub menu variation for MenuItem Slice
 *
 * - **API ID**: `withSubMenu`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemSliceWithSubMenu = prismic.SharedSliceVariation<
  "withSubMenu",
  Simplify<MenuItemSliceWithSubMenuPrimary>,
  never
>;

/**
 * Slice variation for *MenuItem*
 */
type MenuItemSliceVariation = MenuItemSliceDefault | MenuItemSliceWithSubMenu;

/**
 * MenuItem Shared Slice
 *
 * - **API ID**: `menu_item`
 * - **Description**: MenuItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemSlice = prismic.SharedSlice<
  "menu_item",
  MenuItemSliceVariation
>;

/**
 * Primary content in *SubMenuItem → Primary*
 */
export interface SubMenuItemSliceDefaultPrimary {
  /**
   * Link field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: label
   * - **API ID Path**: sub_menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Default variation for SubMenuItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubMenuItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SubMenuItemSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *SubMenuItem → Primary*
 */
export interface SubMenuItemSliceButtonPrimary {
  /**
   * Link field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Button variation for SubMenuItem Slice
 *
 * - **API ID**: `button`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubMenuItemSliceButton = prismic.SharedSliceVariation<
  "button",
  Simplify<SubMenuItemSliceButtonPrimary>,
  never
>;

/**
 * Primary content in *SubMenuItem → Primary*
 */
export interface SubMenuItemSliceBoxPrimary {
  /**
   * Link field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Description field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Box variation for SubMenuItem Slice
 *
 * - **API ID**: `box`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubMenuItemSliceBox = prismic.SharedSliceVariation<
  "box",
  Simplify<SubMenuItemSliceBoxPrimary>,
  never
>;

/**
 * Primary content in *SubMenuItem → Primary*
 */
export interface SubMenuItemSliceWithIconPrimary {
  /**
   * Link field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Icon field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;
}

/**
 * withIcon variation for SubMenuItem Slice
 *
 * - **API ID**: `withIcon`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubMenuItemSliceWithIcon = prismic.SharedSliceVariation<
  "withIcon",
  Simplify<SubMenuItemSliceWithIconPrimary>,
  never
>;

/**
 * Slice variation for *SubMenuItem*
 */
type SubMenuItemSliceVariation =
  | SubMenuItemSliceDefault
  | SubMenuItemSliceButton
  | SubMenuItemSliceBox
  | SubMenuItemSliceWithIcon;

/**
 * SubMenuItem Shared Slice
 *
 * - **API ID**: `sub_menu_item`
 * - **Description**: SubMenuItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubMenuItemSlice = prismic.SharedSlice<
  "sub_menu_item",
  SubMenuItemSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomePageDocument,
      HomePageDocumentData,
      HomePageDocumentDataSlicesSlice,
      LayoutDocument,
      LayoutDocumentData,
      LayoutDocumentDataLogoItem,
      LayoutDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      SubMenuDocument,
      SubMenuDocumentData,
      SubMenuDocumentDataSlicesSlice,
      SubMenuDocumentDataSlices1Slice,
      SubMenuDocumentDataSlices2Slice,
      SubMenuDocumentDataSlices3Slice,
      AllDocumentTypes,
      HeadingSlice,
      HeadingSliceDefaultPrimary,
      HeadingSliceVariation,
      HeadingSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      LogoCarouselSlice,
      LogoCarouselSliceDefaultPrimary,
      LogoCarouselSliceDefaultItem,
      LogoCarouselSliceVariation,
      LogoCarouselSliceDefault,
      MenuItemSlice,
      MenuItemSliceDefaultPrimary,
      MenuItemSliceWithSubMenuPrimary,
      MenuItemSliceVariation,
      MenuItemSliceDefault,
      MenuItemSliceWithSubMenu,
      SubMenuItemSlice,
      SubMenuItemSliceDefaultPrimary,
      SubMenuItemSliceButtonPrimary,
      SubMenuItemSliceBoxPrimary,
      SubMenuItemSliceWithIconPrimary,
      SubMenuItemSliceVariation,
      SubMenuItemSliceDefault,
      SubMenuItemSliceButton,
      SubMenuItemSliceBox,
      SubMenuItemSliceWithIcon,
    };
  }
}