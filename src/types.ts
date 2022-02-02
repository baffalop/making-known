export enum View {
  Header = 'header',
  Menu = 'menu',
  Player = 'player',
}

export enum Piece {
  Jane = 'jane',
  Diana = 'diana',
  Paul = 'paul',
}

export function titleFor (piece: Piece): string {
  switch (piece) {
    case Piece.Jane: return 'Dear Jane'
    case Piece.Diana: return 'Dear Diana'
    case Piece.Paul: return 'Dear Paul'
  }
}
