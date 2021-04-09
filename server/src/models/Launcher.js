import fs from "fs"

const launchersPath = "launchers.json"

class Launcher {
  constructor({ id, name, bio }) {
    this.id = id
    this.name = name
    this.bio = bio
  }

  static findAll() {
    const launcherData = JSON.parse(fs.readFileSync(launchersPath)).launchers
    const launchers = launcherData.map(launcher => new Launcher(launcher))
    return launchers
  }

  static findById(id) {
    const allLaunchers = this.findAll()
    const myLauncher = allLaunchers.find(launcher => launcher.id == id)
    return myLauncher
  }
}

export default Launcher