export enum View {
  Header = 'header',
  Menu = 'menu',
  Player = 'player',
}

export enum Piece {
  Herve = 'herve',
  Julia = 'julia',
  Conny = 'conny',
}

export function titleFor (piece: Piece): string {
  switch (piece) {
    case Piece.Herve: return 'Dear Hervé'
    case Piece.Julia: return 'Dear Julia'
    case Piece.Conny: return 'Dear Conny'
  }
}
