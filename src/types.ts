export enum Piece {
  Jane = 'jane',
  Dianna = 'dianna',
  Paul = 'paul',
}

export function titleFor (piece: Piece): string {
  switch (piece) {
    case Piece.Jane: return 'Dear Jane'
    case Piece.Dianna: return 'Dear Dianna'
    case Piece.Paul: return 'Dear Paul'
  }
}
