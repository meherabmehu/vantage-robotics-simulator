import Matrix from "./Matrix";

export default class Jacobian {
  private rows: number;
  private cols: number;

  constructor(dof: number) {
    this.rows = 6;
    this.cols = dof;
  }

  public create(): number[][] {
    return Matrix.zeros(this.rows, this.cols);
  }

  public setColumn(
    matrix: number[][],
    column: number,
    values: number[]
  ) {
    if (values.length !== this.rows) {
      throw new Error(
        "Jacobian column must contain 6 values."
      );
    }

    for (let row = 0; row < this.rows; row++) {
      matrix[row][column] = values[row];
    }
  }

  public clone(
    matrix: number[][]
  ): number[][] {
    return matrix.map((row) => [...row]);
  }

  public transpose(
    matrix: number[][]
  ): number[][] {
    return Matrix.transpose(matrix);
  }
}