import * as CANNON from '../../../cannon-es/dist';
import { Demo } from './demo';

CANNON.Demo = Demo;

const demo = new CANNON.Demo();

demo.addScene('jenga', function () {
	const world = demo.getWorld();
	// world.allowSleep = true;
	world.gravity.set(0, 0, -5);
	world.broadphase = new CANNON.NaiveBroadphase();
	world.solver.iterations = 50;

	world.defaultContactMaterial.contactEquationStiffness = 5e6;
	world.defaultContactMaterial.contactEquationRelaxation = 3;

	// ground plane
	const groundShape = new CANNON.Plane();
	const groundBody = new CANNON.Body({
		mass: 0,
	});
	groundBody.addShape(groundShape);
	groundBody.position.set(-10, 0, 0);
	world.addBody(groundBody);
	demo.addVisual(groundBody);

	const size = 0.5;
	const mass = 1;
	const gap = 0.02;

	for (let i = 0; i < 10; i++) { // Layers
		for (let j = 0; j < 3; j++) {
			const body = new CANNON.Body({ mass: mass });

			const he = new CANNON.Vec3(size * 3, size, size);
			let dx = 0;
			let dy = 1;

			if (i % 2 === 0) {
				he.set(size, size * 3, size);
				dx = 1;
				dy = 0;
			}

			const shape = new CANNON.Box(he);
			body.addShape(shape);

			body.position.set(
				2 * (size + gap) * (j - 1) * dx,
				2 * (size + gap) * (j - 1) * dy,
				2 * (size + gap) * (i + 1),
			);

			world.addBody(body);
			demo.addVisual(body);
		}
	}
});

demo.start();
