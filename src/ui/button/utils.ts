import { ButtonType } from './types';
import { Location } from '@/utils/types';

export function composeButtonStyles(
  styles: Record<string, string>,
  buttonType: ButtonType,
  location: Location | undefined,
  extraClass?: string,
): string {
  // common styles
  let buttonStyles = `
    ${styles.button}
    ${extraClass}
    ${styles[`button_type_${buttonType}`]}
  `;

  // choose background color
  switch (buttonType) {
    case ButtonType.Filter:
      buttonStyles += styles[`button_background_default`];
      break;

    case ButtonType.Send:
      buttonStyles += styles[`button_background_slategray`];
      break;

    case ButtonType.Subscribe:
      buttonStyles += styles[`button_background_slategray`];
      break;

    case ButtonType.Request:
      buttonStyles +=
        location === Location.Capital || location === undefined
          ? styles[`button_background_brown`]
          : styles[`button_background_pinegreen`];
      break;

    case ButtonType.Card:
      buttonStyles +=
        location === Location.Capital || location === undefined
          ? styles[`button_background_orangered`]
          : styles[`button_background_green`];
      break;
  }

  return buttonStyles;
}
