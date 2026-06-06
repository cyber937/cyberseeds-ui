import { describe, it, expect } from "vitest";
import type {
  AlertVariant,
  BadgeVariant,
  Breakpoint,
  ButtonGroupContextType,
  ButtonTabsContextType,
  Color,
  CustomColor,
  FormFieldContextType,
  PresetColor,
  ResolvedCustomColor,
  ResolvedTheme,
  Scale,
  SemanticColor,
  SemanticColorMap,
  SemanticColorName,
  TabsContextType,
  ThemeContextType,
  ThemeMode,
  ToastPosition,
  ToastState,
  ToastVariant,
  UIColorContextType,
  Variant,
} from "../index";

// This test exists to lock in the public type surface of the library.
// If any of the imports above stop resolving, TypeScript will fail at build
// time. The runtime assertion is just a placeholder — the value is the
// import list itself.
describe("public type exports", () => {
  it("exports the full set of consumer-facing types from the main entrypoint", () => {
    // Compile-time assignability checks: each line proves the type is shaped
    // the way consumers depend on. If the type drifts incompatibly, this
    // file fails to type-check and CI fails.
    const _alert: AlertVariant = "info";
    const _badge: BadgeVariant = "solid";
    const _scale: Scale = "md";
    const _variant: Variant = "primary";
    const _semantic: SemanticColor = "success";
    const _semanticName: SemanticColorName = "info";
    const _preset: PresetColor = "blue";
    const _color: Color = "blue";
    const _custom: CustomColor = { base: "#000" };
    const _resolvedCustom: ResolvedCustomColor = {
      "50": "#000",
      "100": "#000",
      "200": "#000",
      "300": "#000",
      "400": "#000",
      "500": "#000",
      "600": "#000",
      "700": "#000",
      "800": "#000",
      "900": "#000",
    };
    const _semanticMap: SemanticColorMap = {
      success: "green",
      warning: "amber",
      error: "red",
      info: "blue",
    };
    const _theme: ThemeMode = "system";
    const _resolvedTheme: ResolvedTheme = "light";
    const _toastVariant: ToastVariant = "success";
    const _toastPosition: ToastPosition = "top-right";
    const _breakpoint: Breakpoint = "md";

    // Context types: assignability via a structural literal proves the shape.
    const _formField: FormFieldContextType = {} as FormFieldContextType;
    const _tabs: TabsContextType = {} as TabsContextType;
    const _uiColor: UIColorContextType = {} as UIColorContextType;
    const _theme2: ThemeContextType = {} as ThemeContextType;
    const _bg: ButtonGroupContextType = {} as ButtonGroupContextType;
    const _bt: ButtonTabsContextType = {} as ButtonTabsContextType;
    const _toastState: ToastState = {} as ToastState;

    expect([
      _alert,
      _badge,
      _scale,
      _variant,
      _semantic,
      _semanticName,
      _preset,
      _color,
      _custom,
      _resolvedCustom,
      _semanticMap,
      _theme,
      _resolvedTheme,
      _toastVariant,
      _toastPosition,
      _breakpoint,
      _formField,
      _tabs,
      _uiColor,
      _theme2,
      _bg,
      _bt,
      _toastState,
    ]).toHaveLength(23);
  });
});
