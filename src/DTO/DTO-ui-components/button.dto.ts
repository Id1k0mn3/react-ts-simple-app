type ClassNames = {
  className: String | Object;
}

export interface ButtonInterface {
  classNames?: ClassNames;
  children: React.ReactNode;
  onClick: (event: any) => void;
}