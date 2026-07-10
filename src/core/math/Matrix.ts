export default class Matrix {
  public static zeros(
    rows: number,
    cols: number
  ): number[][] {
    return Array.from(
      { length: rows },
      () => Array(cols).fill(0)
    );
  }

  public static transpose(
    matrix: number[][]
  ): number[][] {
    return matrix[0].map((_, col) =>
      matrix.map((row) => row[col])
    );
  }

  public static multiply(
    a: number[][],
    b: number[][]
  ): number[][] {
    const result = Matrix.zeros(
      a.length,
      b[0].length
    );

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b[0].length; j++) {
        for (let k = 0; k < b.length; k++) {
          result[i][j] +=
            a[i][k] * b[k][j];
        }
      }
    }

    return result;
  }

  public static multiplyVector(
    matrix: number[][],
    vector: number[]
  ): number[] {
    return matrix.map((row) =>
      row.reduce(
        (sum, value, index) =>
          sum + value * vector[index],
        0
      )
    );
  }

  public static identity(
    size: number
  ): number[][] {
    const m = Matrix.zeros(size, size);

    for (let i = 0; i < size; i++) {
      m[i][i] = 1;
    }

    return m;
  }
}