/**
 * Imports
 */
const yaml = require('js-yaml');
const fs = require('fs');
const spawn = require('child_process').spawn;

const command = process.argv[2];

if (command === "build") {

	/**
	 * Open file or throw
	 */
	try {
		const doc = yaml.safeLoad(fs.readFileSync('./mkdocs.yml.master', 'utf8'));
		const section_to_build = process.argv[3];

		/**
		 * Find corresponding section in config file
		 * @type {boolean}
		 */
		let found_section = false;
		let section_data = {};
		for (var key in doc.pages) {
			if (typeof doc.pages[key][section_to_build] !== "undefined") {
				found_section = true;
				section_data = doc.pages[key][section_to_build];
			}
		}

		/**
		 * Throw if not found
		 */
		if (!found_section) {
			throw("Section '" + section_to_build + " not found in mkdocs.yml!");
		}

		/**
		 * Build only the section we found
		 * @type {Array}
		 */
		doc.pages = [];
		doc.pages[0] = {};
		doc.pages[0][section_to_build] = section_data;

		/**
		 * Create new config
		 */
		var new_config = yaml.dump(doc, {});

		/**
		 * Write new config to mkdocs.yml
		 */
		fs.writeFileSync('./mkdocs.yml', new_config, 'utf8');

		console.info("Building docs for section '" + section_to_build + "'");

		const mkdocs_serve = spawn('mkdocs', ['serve', '--dirtyreload']);

		mkdocs_serve.stdout.on('data', function (data) {
			console.log(data.toString().replace("\n", ""));
		});

		mkdocs_serve.stderr.on('data', function (data) {
			console.log(data.toString().replace("\n", ""));
		});

	} catch (e) {
		console.log(e);
	}

}
else {
	console.error("Command '" + command + "' not found");
}