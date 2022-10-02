import { execSync } from "child_process";

const run = (command: string) => {
  execSync(command, { stdio: "inherit" });
};

run("mkdir -p .data/results");
run(
  "wget -O- https://github.com/fresh-app/results/archive/refs/heads/main.tar.gz | tar -xzv -C .data/results --strip-components=1"
);
