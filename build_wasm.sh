#!/bin/bash
rustc --crate-type=cdylib --target=wasm32-unknown-unknown add.rs -o src/add.wasm
