import { colord } from "./colord";

export function letsGoLCH(objName: string, obj: Record<string, string>): void {
  function round(n: number): number {
    return Number(n.toFixed(0));
  }
  console.log(`\n\nconst ${objName} = {`);
  for (const [name, color] of Object.entries(obj)) {
    const { l, c, h } = colord(color).toLch();
    const values = [l, c, h].map(round).join(", ");
    console.log(`  ${name}: lch(${values}),`);
  }
  console.log("};");
}
