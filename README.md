# ContainerisingCaliperForFabricBenchmark

1) npm install -g --only=prod @hyperledger/caliper-cli@0.3.1
2) caliper bind --caliper-bind-sut fabric:1.4.4 --caliper-bind-args=-g
3) caliper launch master --caliper-workspace ./ --caliper-benchconfig ./benchmarks/scenario/simple/pavan/config.yaml --caliper-networkconfig ./networks/fabric/pavan/network-config_1.4.yaml



