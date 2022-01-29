export enum View {
  Header = 'header',
  Menu = 'menu',
  Player = 'player',
}

export enum Piece {
  Diana = 'diana',
  Julia = 'julia',
  Conny = 'conny',
}

export function titleFor (piece: Piece): string {
  switch (piece) {
    case Piece.Diana: return 'Dear Diana'
    case Piece.Julia: return 'Dear Julia'
    case Piece.Conny: return 'Dear Conny'
  }
}
